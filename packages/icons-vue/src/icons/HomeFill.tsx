// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import HomeFillSvg from '@airclass/icons-svg/lib/asn/HomeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const HomeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeFillSvg}></AntdIcon>;
};

HomeFill.displayName = 'HomeFill';
HomeFill.inheritAttrs = false;
export default HomeFill;