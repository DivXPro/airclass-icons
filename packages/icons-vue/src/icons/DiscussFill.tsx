// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DiscussFillSvg from '@airclass/icons-svg/lib/asn/DiscussFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DiscussFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiscussFillSvg}></AntdIcon>;
};

DiscussFill.displayName = 'DiscussFill';
DiscussFill.inheritAttrs = false;
export default DiscussFill;