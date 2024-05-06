"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const DutiesCard = (props) => {
    const [edit, setEdit] = (0, react_1.useState)(false);
    const updateDutyName = (event) => {
        props.duty.name = event.target.value;
    };
    const updateDutyDesc = (event) => {
        props.duty.desc = event.target.value;
    };
    return (react_1.default.createElement("article", { className: "dutyList" },
        react_1.default.createElement("p", null,
            "ID: ",
            props.duty.id),
        edit ?
            (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("p", null,
                    "Name: ",
                    react_1.default.createElement("input", { placeholder: props.duty.name, onChange: updateDutyName })),
                react_1.default.createElement("p", null,
                    "Description: ",
                    react_1.default.createElement("input", { placeholder: props.duty.desc, onChange: updateDutyDesc })),
                react_1.default.createElement("button", { onClick: () => setEdit(false) }, "Save")))
            : (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("p", null,
                    "Name: ",
                    props.duty.name),
                react_1.default.createElement("p", null,
                    "Description: ",
                    props.duty.desc),
                react_1.default.createElement("button", { onClick: () => setEdit(true) }, "Update")))));
};
exports.default = DutiesCard;
