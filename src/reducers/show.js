import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (show = initialStore.show, action) => {
  switch (action.type) {
    case TYPE.FILTER.TODO: {
      return {
        showFinish: action.payload.showFinish,
        showUnFinish: action.payload.showUnFinish
      }
    }
    default: {
      return show
    }
  }
}