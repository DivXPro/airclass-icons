// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import RssFillSvg from '@airclass/icons-svg/lib/asn/RssFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const RssFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RssFillSvg}></AntdIcon>;
};

RssFill.displayName = 'RssFill';
RssFill.inheritAttrs = false;
export default RssFill;