// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import CelsiusLineSvg from '@airclass/icons-svg/lib/asn/CelsiusLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const CelsiusLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CelsiusLineSvg}></AntdIcon>;
};

CelsiusLine.displayName = 'CelsiusLine';
CelsiusLine.inheritAttrs = false;
export default CelsiusLine;