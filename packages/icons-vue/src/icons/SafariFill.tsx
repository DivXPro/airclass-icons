// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SafariFillSvg from '@airclass/icons-svg/lib/asn/SafariFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafariFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafariFillSvg}></AntdIcon>;
};

SafariFill.displayName = 'SafariFill';
SafariFill.inheritAttrs = false;
export default SafariFill;