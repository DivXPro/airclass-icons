// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CastLineSvg from '@airclass/icons-svg/lib/asn/CastLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CastLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CastLineSvg}></AntdIcon>;
};

CastLine.displayName = 'CastLine';
CastLine.inheritAttrs = false;
export default CastLine;