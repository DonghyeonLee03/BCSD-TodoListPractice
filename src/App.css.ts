import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

export const frame = style({
  minHeight: "60vh",
  width: "60%",
  margin: "20vh 0",
  display: "flex",
  boxSizing: "border-box",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.3)",
  borderRadius: "15px",
  paddingBottom: "30px",
});
export const title = style({
  fontSize: "2rem",
});
export const form = style({
  height: "1rem",
  width: "80%",
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "10px",
});
export const input = style({
  flexGrow: "1",
  marginLeft: "1px",
  paddingLeft: "10px",
});
export const list = style({
  width: "80%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});
export const label = style({
  borderBottom: "2px solid rgba(128, 128, 128, 0.5)",
  marginLeft: "1rem",
  flexGrow: "1",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const check = style({
  minHeight: "1rem",
  minWidth: "1rem",
});
export const content = style({
  lineHeight: "0.8rem",
  fontSize: "0.8rem",
  flexGrow: "1",
  display: "flex",
  flexWrap: "wrap",
  textAlign: "left",
});
export const contentStyle = styleVariants({
  false: [content],
  true: [content, { color: "grey", textDecoration: "line-through" }],
});
export const button = style({
  border: "none",
});
export const buttonStyle = styleVariants({
  input: [
    button,
    {
      color: "white",
      backgroundColor: "rgb(80, 80, 255)",
      ":hover": { backgroundColor: "rgb(0, 0, 255)" },
    },
  ],
  delete: [
    button,
    {
      backgroundColor: "rgba(0, 0, 0, 0)",
      width: "auto",
      height: "auto",
    },
  ],
});
export const deleteIcon = style({
  height: "1rem",
  width: "1rem",
  fill: "red",
});

globalStyle("html", {
  fontSize: "32px",
  width: "100%",
});
globalStyle("body", {
  width: "100%",
  margin: "0",
});
globalStyle("#root", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
