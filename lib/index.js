import List from './list';
import Area from './area';
import Footer from './footer';
import Bus from './bus';
import Editor from './editor';
import editorButtons from './editorButtons.js';
import lifeCycleHooks, { dispatch, initLifeCycle } from './lifeCycle';

import nodes, { LEYLIM_ROOT } from './constant';

/**
 * Constructor of Leylim
 *
 * @example
 * ```javascript
 * const leylim = new Leylim({
 *   el: '#app',
 *   components,
 *   rowList
 * });
 * ```
 *
 * @export
 * @class Leylim
 */

export default class Leylim {
  constructor(options) {
    /**
     * @todo extends options
     * @todo check is options.el dom element?
     */
    this.options = options;
    const _lifeCycleHooks = Object.assign({}, lifeCycleHooks, this.options);
    initLifeCycle(_lifeCycleHooks);
    dispatch('beforeCreate');
    this.init();
  }
  /**
   * Public method for get all rowList
   * @public
   * @returns
   * @memberof Leylim
   */
  getRowData() {
    return this._area.getRowData();
  }
  /**
   * init member of leylim for example; List, Area etc
   * @private
   */
  init() {
    const {
      components = [],
      el,
      rowList = [],
      buttons = [],
      thumbnailPath = '',
      customEditorButtons = {
        merge: true,
        buttons: []
      }
    } = this.options;

    if (!components.length)
      throw new Error(
        "Can you give me components? please! If you don't have an idea; https://github.com/abdullah/leylim "
      );

    Leylim._components = components;
    Leylim._rowList = rowList;

    const appNode = document.querySelector(el);
    const leylimNode = document.createElement('div');
    leylimNode.classList.add(LEYLIM_ROOT);
    appNode.appendChild(leylimNode);

    this._list = new List({
      rootNode: `.${LEYLIM_ROOT}`,
      thumbnailPath,
      components
    });

    this._footer = new Footer({
      rootNode: `.${LEYLIM_ROOT}`,
      buttons
    });

    this._area = new Area({
      rootNode: `.${LEYLIM_ROOT}`,
      rowList
    });

    Leylim._plugins.forEach(fn => {
      fn();
    });

    this._editor = new Editor({
      merge: customEditorButtons.merge,
      buttons: customEditorButtons.buttons,
      filter: customEditorButtons.filter
    });

    dispatch('created');
  }
  /**
   * For plugin using
   * @static
   * @memberof Leylim
   */
  static use(plugin, options) {
    this._plugins.push(() => {
      if (!plugin.install) throw new Error('Plugin must have install method');
      plugin.install(this, options);
    });
  }

  static forceUpdate() {
    Bus.fire('forceUpdate');
  }
  // All static properties of Leylim,  also you can use under plugin install
  static editorButtons = editorButtons;
  static nodes = nodes;
  static _plugins = [];
  static _selection = null;

  /**
   * Save selection text for using after command or anything
   *
   * @static
   * @memberof Leylim
   */
  static saveSelection = () => {
    if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        Leylim._selection = sel.getRangeAt(0);
        return Leylim._selection;
      }
    } else if (document.selection && document.selection.createRange) {
      Leylim._selection = document.selection.createRange();
      return Leylim._selection;
    }
    return null;
  };

  static restoreSelection = () => {
    if (Leylim._selection) {
      if (window.getSelection) {
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(Leylim._selection);
      } else if (document.selection && Leylim._selection.select) {
        Leylim._selection.select();
      }
    }
  };
}
