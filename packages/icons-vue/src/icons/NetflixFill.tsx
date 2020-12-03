// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NetflixFillSvg from '@airclass/icons-svg/lib/asn/NetflixFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NetflixFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NetflixFillSvg}></AntdIcon>;
};

NetflixFill.displayName = 'NetflixFill';
NetflixFill.inheritAttrs = false;
export default NetflixFill;