import {Root} from "@redx/types"

// ========== Domain Selector ==========
// companies
const catchErrorSel = (state: Root.State): string => state.app.flash.errorMsg

// ========== Referenced from outside the todos domain ==========
export const appSelectors = {catchErrorSel}
