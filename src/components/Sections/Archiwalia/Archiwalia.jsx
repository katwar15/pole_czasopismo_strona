import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Archiwalia.css";
import forward_button from "../../../assets/forward_button.svg";
import ArchiwaliaSection from "./ArchiwaliaSection";

const Archiwalia = () => {
  const [isShownOne, setIsShownOne] = useState(false);
  const [isShownTwo, setIsShownTwo] = useState(false);
  const [isShownThree, setIsShownThree] = useState(false);
  const [isShownFour, setIsShownFour] = useState(false);
  const [isShownFive, setIsShownFive] = useState(false);

  return (
    <div className="archiwalia_section">
      <Link to="/" className="forward_button">
        <img className="forward_img" src={forward_button}></img>
      </Link>
      <svg className="svg_map_archiwalia" viewBox="0 0 1716 1700">
        <ArchiwaliaSection></ArchiwaliaSection>
        <Link
          to="/laure"
          onMouseEnter={() => setIsShownOne(true)}
          onMouseLeave={() => setIsShownOne(false)}
        >
          <rect x={280} y={920} width={22} height={22} rx={11} fill="#fff" />

          {isShownOne && (
            <svg>
              <g clipPath="url(#clip0_305_260)">
                <path
                  d="M333 875h-85c-7.18 0-13 5.82-13 13v9c0 7.18 5.82 13 13 13h85c7.18 0 13-5.82 13-13v-9c0-7.18-5.82-13-13-13z"
                  fill="#000"
                />
                <path d="M289.748 918L283 908h13.496l-6.748 10z" fill="#000" />
                <path
                  d="M266.277 898.668V901h-8.566v-2.332h8.566zm-7.746-14.73V901h-2.941v-17.062h2.941zm16.899 2.273L270.332 901h-3.082l6.422-17.062h1.969l-.211 2.273zM279.695 901l-5.109-14.789-.223-2.273h1.981L282.789 901h-3.094zm-.246-6.328v2.332h-9.281v-2.332h9.281zm14.614-10.734h2.929v11.402c0 1.297-.281 2.383-.844 3.258a5.297 5.297 0 01-2.296 1.98c-.961.438-2.036.656-3.223.656-1.227 0-2.32-.218-3.281-.656a5.24 5.24 0 01-2.274-1.98c-.547-.875-.82-1.961-.82-3.258v-11.402h2.93v11.402c0 .82.14 1.496.422 2.027.281.524.679.91 1.195 1.16.515.25 1.125.375 1.828.375.703 0 1.309-.125 1.816-.375a2.64 2.64 0 001.196-1.16c.281-.531.422-1.207.422-2.027v-11.402zm6.128 0h6.036c1.296 0 2.402.195 3.316.585.914.391 1.613.969 2.098 1.735.492.758.738 1.695.738 2.812 0 .852-.156 1.602-.469 2.25a4.568 4.568 0 01-1.324 1.641c-.57.437-1.25.777-2.039 1.019l-.891.434h-5.425l-.024-2.332h4.066c.704 0 1.29-.125 1.758-.375a2.51 2.51 0 001.055-1.019c.242-.438.363-.93.363-1.477 0-.594-.117-1.109-.351-1.547a2.27 2.27 0 00-1.055-1.02c-.477-.242-1.082-.363-1.816-.363h-3.094V901h-2.942v-17.062zM309.93 901l-4.008-7.664 3.082-.012 4.066 7.524V901h-3.14zm16.547-2.332V901h-9.059v-2.332h9.059zm-8.227-14.73V901h-2.941v-17.062h2.941zm7.043 7.124v2.297h-7.875v-2.297h7.875zm1.125-7.124v2.343h-9v-2.343h9z"
                  fill="#fff"
                />
              </g>
            </svg>
          )}
        </Link>
        <Link
          to="/lukaskrajeski"
          onMouseEnter={() => setIsShownTwo(true)}
          onMouseLeave={() => setIsShownTwo(false)}
        >
          <rect x={740} y={849} width={22} height={22} rx={11} fill="#fff" />
          {isShownTwo && (
            <svg>
              <g clipPath="url(#clip0_305_260)">
                <path
                  d="M861 804H642c-7.18 0-13 5.82-13 13v9c0 7.18 5.82 13 13 13h219c7.18 0 13-5.82 13-13v-9c0-7.18-5.82-13-13-13z"
                  fill="#000"
                />
                <path d="M751.748 847L745 837h13.496l-6.748 10z" fill="#000" />
                <path
                  d="M646.615 818.961v1.687l-7.29 2.192v-1.688l7.29-2.191zm4.968 8.707V830h-8.566v-2.332h8.566zm-7.758-14.73V830h-2.929v-17.062h2.929zm19.606 0h2.93v11.402c0 1.297-.282 2.383-.844 3.258a5.3 5.3 0 01-2.297 1.98c-.961.438-2.035.656-3.223.656-1.226 0-2.32-.218-3.281-.656a5.231 5.231 0 01-2.273-1.98c-.547-.875-.821-1.961-.821-3.258v-11.402h2.93v11.402c0 .82.141 1.496.422 2.027.281.524.68.91 1.195 1.16.516.25 1.125.375 1.828.375.703 0 1.309-.125 1.817-.375.515-.25.914-.636 1.195-1.16.281-.531.422-1.207.422-2.027v-11.402zm9.07 0V830h-2.941v-17.062h2.941zm10.254 0l-6.914 8.214-3.937 4.172-.516-2.918 2.812-3.468 4.969-6h3.586zM679.591 830l-5.613-8.086 2.027-2.004 7.078 10.09h-3.492zm11.777-14.789L686.271 830h-3.082l6.422-17.062h1.968l-.211 2.273zM695.634 830l-5.109-14.789-.223-2.273h1.98L698.728 830h-3.094zm-.246-6.328v2.332h-9.281v-2.332h9.281zm14.227 1.934c0-.352-.055-.665-.165-.938a1.834 1.834 0 00-.55-.75c-.266-.227-.641-.445-1.125-.656a14.839 14.839 0 00-1.828-.668 20.33 20.33 0 01-2.25-.832 8.597 8.597 0 01-1.782-1.078 4.605 4.605 0 01-1.183-1.418c-.282-.539-.422-1.16-.422-1.864 0-.695.144-1.328.433-1.898a4.436 4.436 0 011.254-1.477 5.989 5.989 0 011.934-.972c.742-.235 1.562-.352 2.461-.352 1.265 0 2.355.235 3.269.703.922.469 1.629 1.098 2.121 1.887.5.789.75 1.66.75 2.613h-2.917c0-.562-.122-1.058-.364-1.488-.234-.437-.594-.781-1.078-1.031-.476-.25-1.082-.375-1.816-.375-.696 0-1.274.105-1.735.316-.461.211-.804.496-1.031.856-.226.359-.34.765-.34 1.218 0 .321.074.614.223.879.148.258.375.5.68.727.304.219.687.426 1.148.621.461.195 1.004.383 1.629.562a16.23 16.23 0 012.473.938c.703.336 1.289.719 1.757 1.148.469.43.821.918 1.055 1.465.234.539.352 1.153.352 1.84 0 .719-.145 1.367-.434 1.945a4.19 4.19 0 01-1.242 1.465c-.531.399-1.172.707-1.922.926-.742.211-1.57.316-2.484.316a9.112 9.112 0 01-2.426-.328 7.114 7.114 0 01-2.156-.996 5.14 5.14 0 01-1.547-1.687c-.383-.68-.575-1.473-.575-2.379h2.942c0 .554.094 1.027.281 1.418.195.39.465.711.809.961.343.242.742.422 1.195.539.461.117.953.176 1.477.176.687 0 1.261-.098 1.722-.293.469-.196.821-.469 1.055-.821.234-.351.352-.758.352-1.218zm17.484 2.062V830h-11.848v-2.332h11.848zm-.27-12.914L716.341 830h-1.969v-1.863l10.524-15.199h1.933v1.816zm-1.089-1.816v2.343h-11.297v-2.343h11.297zm12.832 0V830h-2.942v-17.062h2.942zm10.253 0l-6.914 8.214-3.937 4.172-.516-2.918 2.813-3.468 4.968-6h3.586zM745.661 830l-5.613-8.086 2.027-2.004 7.079 10.09h-3.493zm5.133-17.062h6.035c1.297 0 2.403.195 3.317.585.914.391 1.613.969 2.097 1.735.493.758.739 1.695.739 2.812 0 .852-.157 1.602-.469 2.25a4.578 4.578 0 01-1.324 1.641c-.571.437-1.25.777-2.039 1.02l-.891.433h-5.426l-.023-2.332h4.066c.703 0 1.289-.125 1.758-.375.469-.25.82-.59 1.055-1.019.242-.438.363-.93.363-1.477 0-.594-.117-1.109-.352-1.547a2.262 2.262 0 00-1.054-1.019c-.477-.243-1.082-.364-1.817-.364h-3.093V830h-2.942v-17.062zM760.532 830l-4.007-7.664 3.082-.012 4.066 7.524V830h-3.141zm12.024-14.789L767.458 830h-3.082l6.422-17.062h1.969l-.211 2.273zM776.822 830l-5.11-14.789-.223-2.273h1.981L779.915 830h-3.093zm-.247-6.328v2.332h-9.281v-2.332h9.281zm12.27 1.207v-11.941h2.93v11.941c0 1.133-.243 2.098-.727 2.894a4.805 4.805 0 01-1.98 1.829c-.836.421-1.786.632-2.848.632-1.086 0-2.051-.183-2.895-.55a4.324 4.324 0 01-1.968-1.688c-.477-.758-.715-1.719-.715-2.883h2.953c0 .672.105 1.215.316 1.629.219.406.524.703.914.891.399.18.864.269 1.395.269.508 0 .957-.113 1.348-.339.398-.235.711-.575.937-1.02.227-.453.34-1.008.34-1.664zm17.484 2.789V830h-9.058v-2.332h9.058zm-8.226-14.73V830h-2.942v-17.062h2.942zm7.043 7.125v2.296h-7.875v-2.296h7.875zm1.125-7.125v2.343h-9v-2.343h9zm6.738 13.23l3.398-13.23h1.782l-.2 3.41L814.357 830h-1.852l.504-3.832zm-2.543-13.23l2.754 13.125.246 3.937h-1.969l-3.949-17.062h2.918zm11.578 13.089l2.719-13.089h2.93L823.743 830h-1.968l.269-3.973zm-3.164-13.089l3.363 13.265.493 3.797h-1.852l-3.574-13.652-.188-3.41h1.758zm19.969 12.668c0-.352-.055-.665-.164-.938a1.837 1.837 0 00-.551-.75c-.266-.227-.641-.445-1.125-.656a14.839 14.839 0 00-1.828-.668 20.33 20.33 0 01-2.25-.832 8.562 8.562 0 01-1.781-1.078 4.609 4.609 0 01-1.184-1.418c-.281-.539-.422-1.16-.422-1.864 0-.695.145-1.328.434-1.898a4.436 4.436 0 011.254-1.477 5.984 5.984 0 011.933-.972c.742-.235 1.563-.352 2.461-.352 1.266 0 2.356.235 3.27.703.922.469 1.629 1.098 2.121 1.887.5.789.75 1.66.75 2.613h-2.918c0-.562-.121-1.058-.363-1.488-.235-.437-.594-.781-1.079-1.031-.476-.25-1.082-.375-1.816-.375-.695 0-1.273.105-1.734.316-.461.211-.805.496-1.032.856a2.238 2.238 0 00-.339 1.218c0 .321.074.614.222.879.149.258.375.5.68.727.305.219.687.426 1.148.621.461.195 1.004.383 1.629.562.946.282 1.77.594 2.473.938.703.336 1.289.719 1.758 1.148.468.43.82.918 1.054 1.465.235.539.352 1.153.352 1.84 0 .719-.145 1.367-.434 1.945a4.19 4.19 0 01-1.242 1.465c-.531.399-1.172.707-1.922.926-.742.211-1.57.316-2.484.316-.82 0-1.629-.109-2.426-.328a7.114 7.114 0 01-2.156-.996 5.14 5.14 0 01-1.547-1.687c-.383-.68-.574-1.473-.574-2.379h2.941c0 .554.094 1.027.281 1.418.196.39.465.711.809.961.344.242.742.422 1.195.539a5.99 5.99 0 001.477.176c.687 0 1.262-.098 1.723-.293.468-.196.82-.469 1.054-.821a2.14 2.14 0 00.352-1.218zm8.496-12.668V830h-2.941v-17.062h2.941zm10.254 0l-6.914 8.214-3.938 4.172-.515-2.918 2.812-3.468 4.969-6h3.586zM854.435 830l-5.613-8.086 2.027-2.004 7.078 10.09h-3.492zm8.273-17.062V830h-2.941v-17.062h2.941z"
                  fill="#fff"
                />
              </g>
            </svg>
          )}
        </Link>
        <Link
          to="/wieslawprzybyla"
          onMouseEnter={() => setIsShownThree(true)}
          onMouseLeave={() => setIsShownThree(false)}
        >
          <rect x={1174} y={1170} width={22} height={22} rx={11} fill="#fff" />
          {isShownThree && (
            <svg>
              <g clipPath="url(#clip0_293_23)">
                <path
                  d="M1295 1125h-219c-7.18 0-13 5.82-13 13v9c0 7.18 5.82 13 13 13h219c7.18 0 13-5.82 13-13v-9c0-7.18-5.82-13-13-13z"
                  fill="#000"
                />
                <path d="M1185.75 1168l-6.75-10h13.5l-6.75 10z" fill="#000" />
                <path
                  d="M1077.09 1147.17l3.4-13.23h1.78l-.2 3.41-3.64 13.65h-1.85l.51-3.83zm-2.55-13.23l2.76 13.12.24 3.94h-1.96l-3.95-17.06h2.91zm11.58 13.09l2.72-13.09h2.93l-3.95 17.06h-1.97l.27-3.97zm-3.16-13.09l3.36 13.26.49 3.8h-1.85l-3.57-13.65-.19-3.41h1.76zm14.13 0V1151h-2.94v-17.06h2.94zm14.83 14.73v2.33h-9.06v-2.33h9.06zm-8.23-14.73V1151h-2.94v-17.06h2.94zm7.04 7.12v2.3h-7.87v-2.3h7.87zm1.13-7.12v2.34h-9v-2.34h9zm11.43 12.67c0-.36-.05-.67-.16-.94-.1-.28-.29-.53-.55-.75-.27-.23-.64-.45-1.13-.66-.47-.22-1.08-.44-1.82-.67a18.3 18.3 0 01-2.25-.83c-.68-.31-1.28-.67-1.79-1.08-.5-.41-.9-.88-1.18-1.41-.28-.54-.42-1.16-.42-1.87 0-.69.14-1.33.43-1.9.3-.57.72-1.06 1.26-1.47a6.05 6.05 0 011.93-.98 8.26 8.26 0 012.46-.35c1.27 0 2.36.24 3.27.71.92.47 1.63 1.09 2.12 1.88.5.79.75 1.66.75 2.62h-2.92c0-.57-.12-1.06-.36-1.49-.23-.44-.59-.78-1.08-1.03-.47-.25-1.08-.38-1.81-.38-.7 0-1.28.11-1.74.32-.46.21-.8.49-1.03.85-.23.36-.34.77-.34 1.22 0 .32.08.62.22.88.15.26.38.5.68.73.31.22.69.42 1.15.62.46.19 1.01.38 1.63.56.95.28 1.77.6 2.47.94.71.33 1.29.72 1.76 1.15.47.43.82.92 1.06 1.46.23.54.35 1.15.35 1.84 0 .72-.15 1.37-.44 1.95-.29.57-.7 1.06-1.24 1.46-.53.4-1.17.71-1.92.93-.74.21-1.57.31-2.48.31-.83 0-1.63-.1-2.43-.32-.79-.22-1.51-.55-2.16-1a5.076 5.076 0 01-1.54-1.69c-.39-.68-.58-1.47-.58-2.38h2.94c0 .56.1 1.03.28 1.42.2.39.47.71.81.96.35.24.75.42 1.2.54.46.12.95.18 1.48.18.68 0 1.26-.1 1.72-.3.47-.19.82-.46 1.05-.82.24-.35.35-.75.35-1.21zm11.49-6.65v1.69l-7.29 2.19v-1.69l7.29-2.19zm4.97 8.71v2.33h-8.57v-2.33h8.57zm-7.76-14.73V1151h-2.93v-17.06h2.93zm16.68 2.27l-5.1 14.79h-3.08l6.42-17.06h1.97l-.21 2.27zm4.26 14.79l-5.11-14.79-.22-2.27h1.98l6.44 17.06h-3.09zm-.25-6.33v2.33h-9.28v-2.33h9.28zm8.85 2.5l3.4-13.23h1.78l-.2 3.41-3.63 13.65h-1.85l.5-3.83zm-2.54-13.23l2.75 13.12.25 3.94h-1.97l-3.95-17.06h2.92zm11.58 13.09l2.72-13.09h2.93l-3.95 17.06h-1.97l.27-3.97zm-3.17-13.09l3.37 13.26.49 3.8h-1.85l-3.58-13.65-.18-3.41h1.75zm23.45 10.7h-4.44v-2.34h4.44c.78 0 1.4-.12 1.88-.37.47-.25.82-.59 1.04-1.03.23-.45.34-.95.34-1.52 0-.54-.11-1.05-.34-1.52-.22-.47-.57-.86-1.04-1.15-.48-.28-1.1-.43-1.88-.43h-3.54V1151h-2.94v-17.06h6.48c1.32 0 2.44.23 3.37.7.93.46 1.63 1.1 2.12 1.92.48.82.72 1.74.72 2.79 0 1.1-.24 2.05-.72 2.84-.49.79-1.19 1.39-2.12 1.81-.93.43-2.05.64-3.37.64zm8.85-10.7h6.04c1.29 0 2.4.19 3.31.58.92.39 1.62.97 2.1 1.74.49.76.74 1.69.74 2.81 0 .85-.16 1.6-.47 2.25-.31.65-.75 1.2-1.32 1.64-.57.44-1.25.78-2.04 1.02l-.89.43h-5.43l-.02-2.33h4.06c.71 0 1.29-.12 1.76-.37s.82-.59 1.06-1.02c.24-.44.36-.93.36-1.48 0-.59-.12-1.11-.35-1.55a2.33 2.33 0 00-1.06-1.02c-.47-.24-1.08-.36-1.81-.36h-3.1V1151h-2.94v-17.06zm9.74 17.06l-4.01-7.66 3.08-.02 4.07 7.53v.15h-3.14zm17.31-2.33v2.33h-11.85v-2.33h11.85zm-.27-12.92l-10.49 15.25h-1.97v-1.86l10.52-15.2h1.94v1.81zm-1.09-1.81v2.34h-11.3v-2.34h11.3zm5.54 0l3.96 8.14 3.96-8.14h3.26l-5.74 10.78v6.28h-2.97v-6.28l-5.74-10.78h3.27zm19.44 9.35h-4.34l-.03-2.15h3.8c.64 0 1.18-.09 1.63-.28.45-.19.79-.47 1.03-.83.23-.37.35-.81.35-1.32 0-.57-.11-1.04-.33-1.4-.22-.36-.55-.62-1.01-.78-.44-.17-1.01-.25-1.71-.25h-2.84V1151h-2.95v-17.06h5.79c.94 0 1.78.09 2.51.27.74.18 1.37.46 1.89.84.52.38.92.85 1.18 1.43.27.58.41 1.27.41 2.06 0 .71-.17 1.35-.5 1.94-.34.57-.83 1.05-1.49 1.41-.66.37-1.47.59-2.45.66l-.94.74zm-.13 7.71h-5.14l1.32-2.33h3.82c.67 0 1.22-.11 1.67-.33.44-.23.78-.54.99-.93.23-.39.34-.86.34-1.39 0-.56-.09-1.04-.29-1.44-.19-.42-.5-.73-.92-.95-.43-.23-.98-.34-1.66-.34h-3.3l.02-2.15h4.3l.67.81c.94.03 1.71.24 2.31.62.61.39 1.06.88 1.36 1.49.3.61.44 1.27.44 1.97 0 1.09-.23 2-.71 2.73-.47.74-1.15 1.29-2.03 1.68-.88.37-1.94.56-3.19.56zm9.87-17.06l3.96 8.14 3.96-8.14h3.26l-5.74 10.78v6.28h-2.97v-6.28l-5.74-10.78h3.27zm18.97 6.02v1.69l-7.29 2.19v-1.69l7.29-2.19zm4.97 8.71v2.33h-8.56v-2.33h8.56zm-7.76-14.73V1151h-2.93v-17.06h2.93zm16.68 2.27l-5.1 14.79h-3.08l6.42-17.06h1.97l-.21 2.27zm4.27 14.79l-5.11-14.79-.23-2.27h1.98l6.45 17.06h-3.09zm-.25-6.33v2.33h-9.28v-2.33h9.28z"
                  fill="#fff"
                />
              </g>
            </svg>
          )}
        </Link>

        <Link
          to="/mariannapilotowa"
          onMouseEnter={() => setIsShownFour(true)}
          onMouseLeave={() => setIsShownFour(false)}
        >
          <rect x={424} y={1296} width={22} height={22} rx={11} fill="#fff" />
          {isShownFour && (
            <svg>
              <g clipPath="url(#clip0_305_260)">
                <path
                  d="M555 1253H316c-7.18 0-13 5.82-13 13v9c0 7.18 5.82 13 13 13h239c7.18 0 13-5.82 13-13v-9c0-7.18-5.82-13-13-13z"
                  fill="#000"
                />
                <path
                  d="M435.748 1296L429 1286h13.496l-6.748 10z"
                  fill="#000"
                />
                <path
                  d="M314.43 1261.94h2.625l4.933 13.16 4.922-13.16h2.625l-6.516 17.06h-2.085l-6.504-17.06zm-1.196 0h2.496l.434 11.39v5.67h-2.93v-17.06zm15 0h2.508V1279h-2.941v-5.67l.433-11.39zm12.856 2.27l-5.098 14.79h-3.082l6.422-17.06h1.969l-.211 2.27zm4.265 14.79l-5.109-14.79-.223-2.27h1.981l6.445 17.06h-3.094zm-.246-6.33v2.33h-9.281v-2.33h9.281zm5.25-10.73h6.035c1.297 0 2.403.19 3.317.58.914.39 1.613.97 2.098 1.74.492.76.738 1.69.738 2.81 0 .85-.156 1.6-.469 2.25-.312.65-.754 1.2-1.324 1.64-.57.44-1.25.78-2.039 1.02l-.891.43h-5.426l-.023-2.33h4.066c.703 0 1.289-.12 1.758-.37.469-.25.82-.59 1.055-1.02.242-.44.363-.93.363-1.48 0-.59-.117-1.11-.351-1.55a2.324 2.324 0 00-1.055-1.02c-.477-.24-1.082-.36-1.817-.36h-3.093V1279h-2.942v-17.06zm9.739 17.06l-4.008-7.66 3.082-.02 4.066 7.53v.15h-3.14zm8.519-17.06V1279h-2.941v-17.06h2.941zm10.512 2.27l-5.098 14.79h-3.082l6.422-17.06h1.969l-.211 2.27zm4.265 14.79l-5.109-14.79-.223-2.27h1.981l6.445 17.06h-3.094zm-.246-6.33v2.33h-9.281v-2.33h9.281zm18.786-10.73V1279h-2.942l-7.652-12.22V1279h-2.942v-17.06h2.942l7.676 12.24v-12.24h2.918zm17.039 0V1279h-2.942l-7.652-12.22V1279h-2.941v-17.06h2.941l7.676 12.24v-12.24h2.918zm10.359 2.27l-5.098 14.79h-3.082l6.422-17.06h1.969l-.211 2.27zm4.266 14.79l-5.11-14.79-.222-2.27h1.98l6.445 17.06h-3.093zm-.246-6.33v2.33h-9.282v-2.33h9.282zm17.707-.03h-4.442v-2.34h4.442c.773 0 1.398-.12 1.875-.37.476-.25.824-.59 1.043-1.03.226-.45.339-.95.339-1.52 0-.54-.113-1.05-.339-1.52a2.638 2.638 0 00-1.043-1.15c-.477-.28-1.102-.43-1.875-.43h-3.539V1279h-2.942v-17.06h6.481c1.32 0 2.441.23 3.363.7.93.46 1.637 1.1 2.121 1.92.484.82.727 1.74.727 2.79 0 1.1-.243 2.05-.727 2.84s-1.191 1.39-2.121 1.81c-.922.43-2.043.64-3.363.64zm11.988-10.7V1279h-2.942v-17.06h2.942zm14.344 14.73v2.33h-8.567v-2.33h8.567zm-7.746-14.73V1279h-2.942v-17.06h2.942zm22.851 8.06v.94c0 1.29-.168 2.44-.504 3.47-.336 1.02-.816 1.89-1.441 2.61a6.147 6.147 0 01-2.227 1.65c-.867.38-1.828.56-2.883.56-1.046 0-2.003-.18-2.871-.56a6.396 6.396 0 01-2.238-1.65c-.633-.72-1.125-1.59-1.477-2.61-.343-1.03-.515-2.18-.515-3.47v-.94c0-1.29.172-2.44.515-3.46.344-1.02.829-1.89 1.454-2.61a6.15 6.15 0 012.238-1.65c.867-.39 1.824-.58 2.871-.58 1.055 0 2.016.19 2.883.58.867.37 1.613.92 2.238 1.65.625.72 1.106 1.59 1.441 2.61.344 1.02.516 2.17.516 3.46zm-2.941.94v-.96c0-.96-.094-1.8-.282-2.52-.179-.74-.449-1.35-.808-1.84-.352-.5-.785-.88-1.301-1.13-.516-.26-1.098-.38-1.746-.38-.648 0-1.227.12-1.734.38-.508.25-.942.63-1.301 1.13-.352.49-.621 1.1-.809 1.84-.187.72-.281 1.56-.281 2.52v.96c0 .95.094 1.79.281 2.53.188.73.461 1.35.821 1.86.367.5.804.88 1.312 1.14.508.25 1.086.37 1.734.37.657 0 1.239-.12 1.747-.37.507-.26.937-.64 1.289-1.14.351-.51.617-1.13.796-1.86.188-.74.282-1.58.282-2.53zm12.316-9V1279h-2.918v-17.06h2.918zm5.356 0v2.34h-13.582v-2.34h13.582zm15.527 8.06v.94c0 1.29-.168 2.44-.504 3.47-.336 1.02-.816 1.89-1.441 2.61a6.155 6.155 0 01-2.227 1.65c-.867.38-1.828.56-2.883.56-1.047 0-2.004-.18-2.871-.56a6.396 6.396 0 01-2.238-1.65c-.633-.72-1.125-1.59-1.477-2.61-.343-1.03-.515-2.18-.515-3.47v-.94c0-1.29.172-2.44.515-3.46.344-1.02.828-1.89 1.453-2.61a6.154 6.154 0 012.239-1.65c.867-.39 1.824-.58 2.871-.58 1.054 0 2.015.19 2.883.58.867.37 1.613.92 2.238 1.65.625.72 1.105 1.59 1.441 2.61.344 1.02.516 2.17.516 3.46zm-2.942.94v-.96c0-.96-.093-1.8-.281-2.52-.179-.74-.449-1.35-.808-1.84-.352-.5-.785-.88-1.301-1.13-.516-.26-1.098-.38-1.746-.38-.649 0-1.227.12-1.735.38-.507.25-.941.63-1.3 1.13-.352.49-.621 1.1-.809 1.84-.187.72-.281 1.56-.281 2.52v.96c0 .95.094 1.79.281 2.53.188.73.461 1.35.82 1.86.368.5.805.88 1.313 1.14.508.25 1.086.37 1.734.37.656 0 1.239-.12 1.746-.37a3.53 3.53 0 001.289-1.14c.352-.51.618-1.13.797-1.86.188-.74.281-1.58.281-2.53zm10.161 4.23l3.398-13.23h1.781l-.199 3.41-3.633 13.65h-1.851l.504-3.83zm-2.543-13.23l2.754 13.12.246 3.94h-1.969l-3.949-17.06h2.918zm11.578 13.09l2.719-13.09h2.929l-3.949 17.06h-1.969l.27-3.97zm-3.164-13.09l3.363 13.26.492 3.8h-1.851l-3.575-13.65-.187-3.41h1.758zm17.121 2.27l-5.098 14.79h-3.082l6.422-17.06h1.969l-.211 2.27zm4.265 14.79l-5.109-14.79-.223-2.27h1.981l6.445 17.06h-3.094zm-.246-6.33v2.33h-9.281v-2.33h9.281z"
                  fill="#fff"
                />
              </g>
            </svg>
          )}
        </Link>
      </svg>
    </div>
  );
};

export default Archiwalia;
