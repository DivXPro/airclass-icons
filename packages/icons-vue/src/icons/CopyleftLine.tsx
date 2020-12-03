// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CopyleftLineSvg from '@airclass/icons-svg/lib/asn/CopyleftLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CopyleftLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CopyleftLineSvg}></AntdIcon>;
};

CopyleftLine.displayName = 'CopyleftLine';
CopyleftLine.inheritAttrs = false;
export default CopyleftLine;