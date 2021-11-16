import React from "react";
import { SvgXml } from "react-native-svg";
export function BriefCase() {
	const img = `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve">
<path style="fill:none;stroke:#556080;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" d="M19,17V7.206
   C19,5.988,19.988,5,21.206,5h15.587C38.012,5,39,5.988,39,7.206V17"/>
<path style="fill:#A97C50;" d="M55.99,54H2.01C0.9,54,0,53.1,0,51.99V16.01C0,14.9,0.9,14,2.01,14H55.99C57.1,14,58,14.9,58,16.01
   V51.99C58,53.1,57.1,54,55.99,54z"/>
<path style="fill:#997046;" d="M8,14H2.01C0.9,14,0,14.9,0,16.01V51.99C0,53.1,0.9,54,2.01,54H8V14z"/>
<path style="fill:#997046;" d="M55.99,14H50v40h5.99C57.1,54,58,53.1,58,51.99V16.01C58,14.9,57.1,14,55.99,14z"/>
<rect x="7" y="14" style="fill:#D1A074;" width="2" height="40"/>
<rect x="49" y="14" style="fill:#D1A074;" width="2" height="40"/>
<rect x="5" y="11" style="fill:#C7CAC7;" width="8" height="3"/>
<rect x="45" y="11" style="fill:#C7CAC7;" width="8" height="3"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>`;

	const BriefCaseSvg = () => <SvgXml xml={img} width="150px" height="150px"/>;
	return <BriefCaseSvg />;
}
