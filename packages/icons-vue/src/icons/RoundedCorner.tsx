// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RoundedCornerSvg from '@airclass/icons-svg/lib/asn/RoundedCorner';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RoundedCorner = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RoundedCornerSvg}></AntdIcon>;
};

RoundedCorner.displayName = 'RoundedCorner';
RoundedCorner.inheritAttrs = false;
export default RoundedCorner;