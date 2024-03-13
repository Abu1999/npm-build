import { defineComponent as U, ref as T, resolveComponent as t, openBlock as o, createElementBlock as z, createVNode as u, withCtx as r, Fragment as k, renderList as w, createBlock as p, createTextVNode as v, toDisplayString as M, renderSlot as C, createCommentVNode as P, createElementVNode as x, resolveDirective as G, withDirectives as H, unref as _ } from "vue";
const K = { class: "w-full h-full" }, Q = /* @__PURE__ */ x("span", null, "搜索", -1), Y = /* @__PURE__ */ U({
  name: "MyForm",
  __name: "MyForm",
  props: {
    size: { default: "default" },
    labelPosition: { default: "left" },
    inline: { type: Boolean, default: !1 },
    footer: { type: Boolean, default: !1 },
    formConfig: {},
    data: { default: [] },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["submit"],
  setup(g, { expose: h, emit: d }) {
    const i = d, V = ["date", "dates", "datetime", "daterange", "datetimerange", "week", "month", "monthrange", "year", "yearmerange"], c = T(), l = g, s = (f) => [
      {
        required: f.required,
        message: f.placeholder ?? (typeof f.required == "boolean" ? `请输入${f.label}` : f.required),
        trigger: "blur"
      }
    ], y = () => {
      c.value && c.value.validate((f) => {
        if (f)
          i("submit");
        else
          return console.log("error submit!"), !1;
      });
    }, b = () => {
      c.value && c.value.resetFields();
    };
    return h({ submitForm: y, resetForm: b }), (f, q) => {
      const $ = t("el-option"), m = t("el-select"), n = t("el-form-item"), B = t("el-date-picker"), S = t("el-input-number"), I = t("el-checkbox"), F = t("el-checkbox-group"), L = t("el-checkbox-button"), O = t("el-radio"), N = t("el-radio-group"), R = t("el-radio-button"), j = t("el-switch"), E = t("el-color-picker"), D = t("el-input"), A = t("Search"), J = t("el-icon"), W = t("el-button"), X = t("el-form");
      return o(), z("div", K, [
        u(X, {
          ref_key: "formRef",
          ref: c,
          inline: l.inline,
          model: l.data,
          "label-width": "auto",
          "label-position": l.labelPosition,
          size: l.size,
          disabled: l.disabled
        }, {
          default: r(() => [
            (o(!0), z(k, null, w(l.formConfig, (e) => (o(), z(k, { key: f.index }, [
              e.type === "select" ? (o(), p(n, {
                key: 0,
                prop: e.prop,
                label: e.label,
                size: e.size,
                rules: e.rules ?? s(e),
                required: e.required
              }, {
                default: r(() => [
                  u(m, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    disabled: e.disabled,
                    multiple: e.multiple,
                    "collapse-tags": "",
                    "collapse-tags-tooltip": "",
                    "max-collapse-tags": e.collapse ?? 2,
                    placeholder: e.placeholder ?? "请选择" + e.label
                  }, {
                    default: r(() => [
                      (o(!0), z(k, null, w(e.options, (a) => (o(), p($, {
                        key: a.value,
                        label: a.label,
                        value: a.value
                      }, null, 8, ["label", "value"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "disabled", "multiple", "max-collapse-tags", "placeholder"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "size", "rules", "required"])) : e.type && V.includes(e.type) ? (o(), p(n, {
                key: 1,
                prop: e.prop,
                label: e.label,
                size: e.size,
                rules: e.rules ?? s(e),
                required: e.required
              }, {
                default: r(() => [
                  u(B, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    type: e.type ?? "date",
                    disabled: e.disabled,
                    placeholder: e.placeholder ?? "请选择" + e.label,
                    "value-format": e.valueFormat
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "disabled", "placeholder", "value-format"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "size", "rules", "required"])) : e.type === "number" ? (o(), p(n, {
                key: 2,
                prop: e.prop,
                label: e.label,
                size: e.size,
                rules: e.rules ?? s(e),
                required: e.required
              }, {
                default: r(() => [
                  u(S, {
                    placeholder: e.placeholder ?? "请输入" + e.label,
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    disabled: e.disabled,
                    precision: 2,
                    step: 0.1,
                    min: e.min,
                    max: e.max
                  }, null, 8, ["placeholder", "modelValue", "onUpdate:modelValue", "disabled", "min", "max"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "size", "rules", "required"])) : e.type === "checkbox" ? (o(), p(n, {
                key: 3,
                prop: e.prop,
                label: e.label,
                size: e.size,
                rules: e.rules ?? s(e),
                required: e.required
              }, {
                default: r(() => [
                  u(F, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    placeholder: e.placeholder ?? "请选择" + e.label,
                    disabled: e.disabled
                  }, {
                    default: r(() => [
                      (o(!0), z(k, null, w(e.options, (a) => (o(), p(I, {
                        key: a.value,
                        label: a.value
                      }, {
                        default: r(() => [
                          v(M(a.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "size", "rules", "required"])) : e.type === "checkboxButton" ? (o(), p(n, {
                key: 4,
                prop: e.prop,
                label: e.label,
                size: e.size,
                rules: e.rules ?? s(e),
                required: e.required
              }, {
                default: r(() => [
                  u(F, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    placeholder: e.placeholder ?? "请选择" + e.label,
                    disabled: e.disabled
                  }, {
                    default: r(() => [
                      (o(!0), z(k, null, w(e.options, (a) => (o(), p(L, {
                        key: a.value,
                        label: a.value
                      }, {
                        default: r(() => [
                          v(M(a.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "size", "rules", "required"])) : e.type === "radio" ? (o(), p(n, {
                key: 5,
                prop: e.prop,
                label: e.label,
                size: e.size,
                rules: e.rules ?? s(e),
                required: e.required
              }, {
                default: r(() => [
                  u(N, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    placeholder: e.placeholder ?? "请选择" + e.label,
                    disabled: e.disabled
                  }, {
                    default: r(() => [
                      (o(!0), z(k, null, w(e.options, (a) => (o(), p(O, {
                        key: a.value,
                        label: a.value
                      }, {
                        default: r(() => [
                          v(M(a.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "size", "rules", "required"])) : e.type === "radioButton" ? (o(), p(n, {
                key: 6,
                prop: e.prop,
                label: e.label,
                size: e.size,
                rules: e.rules ?? s(e),
                required: e.required
              }, {
                default: r(() => [
                  u(N, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    placeholder: e.placeholder ?? "请选择" + e.label,
                    disabled: e.disabled
                  }, {
                    default: r(() => [
                      (o(!0), z(k, null, w(e.options, (a) => (o(), p(R, {
                        key: a.value,
                        label: a.value
                      }, {
                        default: r(() => [
                          v(M(a.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["label"]))), 128))
                    ]),
                    _: 2
                  }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "size", "rules", "required"])) : e.type === "switch" ? (o(), p(n, {
                key: 7,
                prop: e.prop,
                label: e.label,
                size: e.size,
                rules: e.rules ?? s(e),
                required: e.required
              }, {
                default: r(() => [
                  u(j, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    placeholder: e.placeholder ?? "请选择" + e.label,
                    disabled: e.disabled
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "size", "rules", "required"])) : e.type === "colorPicker" ? (o(), p(n, {
                key: 8,
                prop: e.prop,
                label: e.label,
                size: e.size,
                rules: e.rules ?? s(e),
                required: e.required
              }, {
                default: r(() => [
                  u(E, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    "show-alpha": "",
                    placeholder: e.placeholder ?? "请选择" + e.label,
                    disabled: e.disabled
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "size", "rules", "required"])) : e.type === "password" ? (o(), p(n, {
                key: 9,
                prop: e.prop,
                label: e.label,
                rules: e.rules ?? s(e),
                size: e.size,
                required: e.required
              }, {
                default: r(() => [
                  u(D, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    type: "password",
                    "show-password": "",
                    placeholder: e.placeholder ?? "请输入" + e.label,
                    disabled: e.disabled
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "rules", "size", "required"])) : e.type === "textarea" ? (o(), p(n, {
                key: 10,
                prop: e.prop,
                label: e.label,
                rules: e.rules ?? s(e),
                size: e.size,
                required: e.required
              }, {
                default: r(() => [
                  u(D, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    type: "textarea",
                    autosize: { minRows: 4 },
                    placeholder: e.placeholder ?? "请输入" + e.label,
                    disabled: e.disabled
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "rules", "size", "required"])) : e.type === "slot" ? (o(), p(n, {
                key: 11,
                prop: e.prop,
                label: e.label,
                rules: e.rules ?? s(e),
                size: e.size,
                required: e.required
              }, {
                default: r(() => [
                  C(f.$slots, e.prop, {
                    data: e,
                    disabled: e.disabled
                  })
                ]),
                _: 2
              }, 1032, ["prop", "label", "rules", "size", "required"])) : (o(), p(n, {
                key: 12,
                prop: e.prop,
                label: e.label,
                rules: e.rules ?? s(e),
                size: e.size,
                required: e.required
              }, {
                default: r(() => [
                  u(D, {
                    modelValue: l.data[e.prop],
                    "onUpdate:modelValue": (a) => l.data[e.prop] = a,
                    placeholder: e.placeholder ?? "请输入" + e.label,
                    disabled: e.disabled
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])
                ]),
                _: 2
              }, 1032, ["prop", "label", "rules", "size", "required"]))
            ], 64))), 128)),
            l.footer ? (o(), p(n, { key: 0 }, {
              default: r(() => [
                u(W, {
                  type: "primary",
                  onClick: q[0] || (q[0] = (e) => y())
                }, {
                  default: r(() => [
                    u(J, null, {
                      default: r(() => [
                        u(A)
                      ]),
                      _: 1
                    }),
                    Q
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : P("", !0),
            u(n, null, {
              default: r(() => [
                C(f.$slots, "action", {
                  submitForm: y,
                  resetForm: b
                })
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["inline", "model", "label-position", "size", "disabled"])
      ]);
    };
  }
}), Z = { class: "w-full h-full relative" }, ee = { class: "w-full h-full absolute flex flex-col justify-between" }, le = { class: "w-full h-[calc(100%-52px)]" }, ae = { class: "w-full h-auto" }, oe = {
  key: 0,
  class: "w-full flex justify-end"
}, re = /* @__PURE__ */ U({
  name: "MyTable",
  __name: "MyTable",
  props: {
    data: { default: () => [] },
    columns: {},
    pagination: { type: [Object, Boolean], default: !1 },
    loading: { type: Boolean },
    border: { type: Boolean, default: !1 },
    stripe: { type: Boolean, default: !1 },
    height: { default: "100%" },
    width: { default: "100%" },
    imagesize: {},
    tablesize: { default: "default" }
  },
  emits: ["paginationChange", "selectionChange"],
  setup(g, { emit: h }) {
    let d = g;
    const i = h, V = (s) => {
      console.log(1), i("selectionChange", s);
    }, c = (s) => {
      console.log(2), d.pagination && (d.pagination.pageSize = s), sessionStorage.setItem("MyTable", JSON.stringify(d.pagination)), i("paginationChange", d.pagination);
    }, l = (s) => {
      console.log(3), d.pagination && (d.pagination.currentPage = s), sessionStorage.setItem("MyTable", JSON.stringify(d.pagination)), i("paginationChange", d.pagination);
    };
    return (s, y) => {
      const b = t("el-table-column"), f = t("el-empty"), q = t("el-table"), $ = t("el-pagination"), m = G("loading");
      return o(), z("div", Z, [
        x("div", ee, [
          x("div", le, [
            H((o(), p(q, {
              data: _(d).data,
              height: _(d).height,
              width: _(d).width,
              size: _(d).tablesize,
              border: _(d).border,
              stripe: _(d).stripe,
              onSelectionChange: V,
              "header-cell-style": { backgroundColor: "var(--el-border-color-lighter)" },
              "show-overflow-tooltip": ""
            }, {
              empty: r(() => [
                u(f, {
                  class: "select-none",
                  "image-size": _(d).imagesize ? _(d).imagesize : 200,
                  description: "暂无数据"
                }, null, 8, ["image-size"])
              ]),
              default: r(() => [
                (o(!0), z(k, null, w(_(d).columns, (n) => (o(), z(k, { key: s.index }, [
                  n.type == "selection" ? (o(), p(b, {
                    key: 0,
                    prop: n.prop,
                    label: n.label,
                    align: n.align,
                    type: "selection",
                    width: n.width ?? "55",
                    fixed: n.fixed
                  }, null, 8, ["prop", "label", "align", "width", "fixed"])) : n.type == "slot" ? (o(), p(b, {
                    key: 1,
                    label: n.label,
                    align: n.align,
                    width: n.width,
                    "min-width": n.minWidth,
                    fixed: n.fixed
                  }, {
                    default: r(({ scope: B, row: S }) => [
                      C(s.$slots, n.prop, {
                        row: S,
                        scope: B
                      })
                    ]),
                    _: 2
                  }, 1032, ["label", "align", "width", "min-width", "fixed"])) : (o(), p(b, {
                    key: 2,
                    prop: n.prop,
                    label: n.label,
                    align: n.align,
                    width: n.width,
                    "min-width": n.minWidth,
                    fixed: n.fixed
                  }, null, 8, ["prop", "label", "align", "width", "min-width", "fixed"]))
                ], 64))), 128))
              ]),
              _: 3
            }, 8, ["data", "height", "width", "size", "border", "stripe", "header-cell-style"])), [
              [m, _(d).loading]
            ])
          ]),
          x("div", ae, [
            _(d).pagination ? (o(), z(k, { key: 0 }, [
              (o(), z("div", oe, [
                u($, {
                  onSizeChange: c,
                  onCurrentChange: l,
                  background: "",
                  small: "",
                  "default-page-size": _(d).pagination.pageSize,
                  "current-page": _(d).pagination.currentPage,
                  layout: "total, sizes, prev, pager, next, jumper",
                  total: Number(_(d).pagination.total)
                }, null, 8, ["default-page-size", "current-page", "total"])
              ]))
            ], 64)) : P("", !0)
          ])
        ])
      ]);
    };
  }
}), de = { style: { flex: "auto" } }, ne = /* @__PURE__ */ U({
  name: "MyDrawer",
  __name: "MyDrawer",
  props: {
    config: { default: () => ({ dialog: !1 }) },
    size: { default: "40%" },
    loading: { type: Boolean, default: () => !0 }
  },
  emits: ["cancel", "confirm"],
  setup(g, { emit: h }) {
    const d = g, i = h;
    function V() {
      i("cancel");
    }
    function c() {
      i("confirm");
    }
    function l() {
      i("cancel");
    }
    return (s, y) => {
      const b = t("el-button"), f = t("el-drawer");
      return o(), p(f, {
        ref: "drawerRef",
        modelValue: d.config.dialog,
        "onUpdate:modelValue": y[0] || (y[0] = (q) => d.config.dialog = q),
        title: d.config.title,
        direction: "rtl",
        size: d.size,
        "before-close": l
      }, {
        footer: r(() => [
          x("div", de, [
            u(b, {
              onClick: V,
              plain: ""
            }, {
              default: r(() => [
                v("取消")
              ]),
              _: 1
            }),
            u(b, {
              type: "primary",
              onClick: c,
              loading: d.loading
            }, {
              default: r(() => [
                v("确认")
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        default: r(() => [
          C(s.$slots, "default")
        ]),
        _: 3
      }, 8, ["modelValue", "title", "size"]);
    };
  }
}), se = /* @__PURE__ */ U({
  name: "MyTransfer",
  __name: "MyTransfer",
  setup(g) {
    const d = T((() => {
      const c = [], l = [
        "California",
        "Illinois",
        "Maryland",
        "Texas",
        "Florida",
        "Colorado",
        "Connecticut "
      ], s = ["CA", "IL", "MD", "TX", "FL", "CO", "CT"];
      return l.forEach((y, b) => {
        c.push({
          label: y,
          key: b,
          initial: s[b]
        });
      }), c;
    })()), i = T([]), V = (c, l) => l.initial.toLowerCase().includes(c.toLowerCase());
    return (c, l) => {
      const s = t("el-transfer");
      return o(), p(s, {
        modelValue: i.value,
        "onUpdate:modelValue": l[0] || (l[0] = (y) => i.value = y),
        filterable: "",
        "filter-method": V,
        "filter-placeholder": "State Abbreviations",
        data: d.value
      }, null, 8, ["modelValue", "data"]);
    };
  }
}), te = { class: "dialog-footer" }, pe = /* @__PURE__ */ U({
  name: "MyDialog",
  __name: "MyDialog",
  props: {
    config: { default: () => ({ visible: !1 }) }
  },
  emits: ["submit"],
  setup(g, { emit: h }) {
    const d = h, i = g, V = () => {
      d("submit");
    };
    return (c, l) => {
      const s = t("el-button"), y = t("el-dialog");
      return o(), p(y, {
        modelValue: i.config.visible,
        "onUpdate:modelValue": l[2] || (l[2] = (b) => i.config.visible = b),
        title: i.config.title ?? "",
        width: "30%",
        "align-center": ""
      }, {
        footer: r(() => [
          x("span", te, [
            u(s, {
              onClick: l[0] || (l[0] = (b) => i.config.visible = !1)
            }, {
              default: r(() => [
                v("取消")
              ]),
              _: 1
            }),
            u(s, {
              type: "primary",
              onClick: l[1] || (l[1] = (b) => V())
            }, {
              default: r(() => [
                v(" 确认 ")
              ]),
              _: 1
            })
          ])
        ]),
        default: r(() => [
          C(c.$slots, "body", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["modelValue", "title"]);
    };
  }
}), ue = (g, h) => {
  const d = g.__vccOpts || g;
  for (const [i, V] of h)
    d[i] = V;
  return d;
}, ie = /* @__PURE__ */ ue(pe, [["__scopeId", "data-v-4144548f"]]), ce = [Y, re, ne, se, ie], be = (g) => {
  ce.forEach((h) => {
    g.component(h.name, h);
  });
}, _e = { install: be };
export {
  ie as MyDialog,
  ne as MyDrawer,
  Y as MyForm,
  re as MyTable,
  se as MyTransfer,
  _e as default
};
