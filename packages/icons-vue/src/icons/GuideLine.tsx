// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import GuideLineSvg from '@airclass/icons-svg/lib/asn/GuideLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const GuideLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GuideLineSvg}></AntdIcon>;
};

GuideLine.displayName = 'GuideLine';
GuideLine.inheritAttrs = false;
export default GuideLine;