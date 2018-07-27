/**
 * Created by mayn on 2018/7/26.
 */
Ext.define('SimpleERP.overrides.util.Sorter', {
    override: "Ext.util.Sorter",

    sortFn: function (item1, item2) {
        var me = this,
            transform = me._transform,
            root = me._root,
            property = me._property,
            lhs,
            rhs;
        if (root) {
            item1 = item1[root];
            item2 = item2[root];
        }

        lhs = item1[property];
        rhs = item2[property];

        if (transform) {
            lhs = transform(lhs);
            rhs = transform(rhs);
        }

        return Ext.isString(lhs) ? lhs.localeCompare(rhs) : lhs > rhs ? 1: (lhs<rhs ? -1 : 0);
    }
});