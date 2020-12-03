// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AwardLineSvg from '@airclass/icons-svg/lib/asn/AwardLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AwardLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AwardLineSvg}></AntdIcon>;
};

AwardLine.displayName = 'AwardLine';
AwardLine.inheritAttrs = false;
export default AwardLine;