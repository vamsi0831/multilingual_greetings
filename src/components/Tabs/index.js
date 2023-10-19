import './index.css'

const Tabs = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? 'active-tab-btn' : 'tab-btn '

  return (
    <li className="tab-item-container">
      <button
        type="button"
        onClick={onClickTabItem}
        className={activeTabBtnClassName}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
