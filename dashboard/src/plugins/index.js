import {
  Alert,
  Button,
  ButtonGroup,
  Checkbox,
  Card,
  Carousel,
  CarouselItem,
  Cascader,
  Col,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Form,
  FormItem,
  Icon,
  Input,
  InputNumber,
  LoadingBar,
  Menu,
  Message,
  MenuGroup,
  MenuItem,
  Modal,
  Option,
  Page,
  Poptip,
  Radio,
  Row,
  Select,
  Spin,
  SubMenu,
  Tabs,
  Table,
  TabPane,
  Tag,
  Tooltip,
  Tree,
  Upload
} from 'iview'


export default {
  install (Vue) {
    Vue.component('i-alert', Alert)
    Vue.component('i-button', Button)
    Vue.component('i-button-group', ButtonGroup)
    Vue.component('i-checkbox', Checkbox)
    Vue.component('i-card', Card)
    Vue.component('i-carousel', Carousel)
    Vue.component('i-carousel-item', CarouselItem)
    Vue.component('i-cascader', Cascader)
    Vue.component('i-col', Col)
    Vue.component('i-collapse', Collapse)
    Vue.component('i-dropdown', Dropdown)
    Vue.component('i-dropdown-item', DropdownItem)
    Vue.component('i-dropdown-menu', DropdownMenu)
    Vue.component('i-form', Form)
    Vue.component('i-form-item', FormItem)
    Vue.component('i-icon', Icon)
    Vue.component('i-input', Input)
    Vue.component('i-input-number', InputNumber)
    Vue.component('i-menu', Menu)
    Vue.component('i-menu-group', MenuGroup)
    Vue.component('i-menu-item', MenuItem)
    Vue.component('i-modal', Modal)
    Vue.component('i-option', Option)
    Vue.component('i-page', Page)
    Vue.component('i-poptip', Poptip)
    Vue.component('i-radio', Radio)
    Vue.component('i-row', Row)
    Vue.component('i-select', Select)
    Vue.component('i-spin', Spin)
    Vue.component('i-sub-menu', SubMenu)
    Vue.component('i-tabs', Tabs)
    Vue.component('i-tab-pane', TabPane)
    Vue.component('i-table', Table)
    Vue.component('i-tag', Tag)
    Vue.component('i-tooltip', Tooltip)
    Vue.component('i-tree', Tree)
    Vue.component('i-upload', Upload)

    Vue.prototype.$Loading = LoadingBar
    Vue.prototype.$Message = Message
    Vue.prototype.$Modal = Modal
  }
}