// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CactusLineSvg from '@airclass/icons-svg/lib/asn/CactusLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CactusLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CactusLineSvg}></AntdIcon>;
};

CactusLine.displayName = 'CactusLine';
CactusLine.inheritAttrs = false;
export default CactusLine;