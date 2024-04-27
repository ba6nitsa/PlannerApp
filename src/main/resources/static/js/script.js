import { stickNavigationOnTop } from "./nav.js";
import { styleMenu } from "./profile-menu.js";
import { changeTheme } from "./theme.js";
import { preloadTheme } from "./theme.js";
import { correctWeekInput } from "./week-input.js"


preloadTheme();

styleMenu();

changeTheme();

stickNavigationOnTop();

correctWeekInput();