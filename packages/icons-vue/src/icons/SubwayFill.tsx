// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SubwayFillSvg from '@airclass/icons-svg/lib/asn/SubwayFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SubwayFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SubwayFillSvg}></AntdIcon>;
};

SubwayFill.displayName = 'SubwayFill';
SubwayFill.inheritAttrs = false;
export default SubwayFill;