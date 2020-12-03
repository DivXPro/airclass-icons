// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RestTimeLineSvg from '@airclass/icons-svg/lib/asn/RestTimeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RestTimeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RestTimeLineSvg}></AntdIcon>;
};

RestTimeLine.displayName = 'RestTimeLine';
RestTimeLine.inheritAttrs = false;
export default RestTimeLine;