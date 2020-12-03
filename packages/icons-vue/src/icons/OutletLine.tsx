// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import OutletLineSvg from '@airclass/icons-svg/lib/asn/OutletLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const OutletLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={OutletLineSvg}></AntdIcon>;
};

OutletLine.displayName = 'OutletLine';
OutletLine.inheritAttrs = false;
export default OutletLine;