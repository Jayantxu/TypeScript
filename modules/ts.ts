/**
* 模块
*/
import { zipCodeValidator } from "./export";
import { zipCodeValidator as ZCV} from "./export";
import * as validator from "./export";
let myValidator1 = new zipCodeValidator();
let myValidator2 = new ZCV();
let myValidator3 = new validator.zipCodeValidator();

import amdANDcommonJS = require("./amdANDcommonJS");
