export const contentTableConfig = {
  title: '菜单列表',
  showFooter: false,
  propList: [
    {
      label: '菜单名称',
      prop: 'name',
      minWidth: '100'
    },
    {
      label: '类型',
      prop: 'type',
      minWidth: '100'
    },
    {
      label: '菜单url',
      prop: 'url',
      minWidth: '100'
    },
    {
      label: '按钮权限',
      prop: 'permission',
      minWidth: '100'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '100',
      slotName: 'handle'
    }
  ],
  childrenProps: {
    rowKey: 'id',
    treeProps: { children: 'children' }
  }
}