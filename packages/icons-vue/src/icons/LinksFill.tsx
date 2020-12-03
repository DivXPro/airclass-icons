// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LinksFillSvg from '@airclass/icons-svg/lib/asn/LinksFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LinksFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinksFillSvg}></AntdIcon>;
};

LinksFill.displayName = 'LinksFill';
LinksFill.inheritAttrs = false;
export default LinksFill;