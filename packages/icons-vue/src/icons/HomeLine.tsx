// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeLineSvg from '@airclass/icons-svg/lib/asn/HomeLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeLineSvg}></AntdIcon>;
};

HomeLine.displayName = 'HomeLine';
HomeLine.inheritAttrs = false;
export default HomeLine;