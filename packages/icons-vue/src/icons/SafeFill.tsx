// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import SafeFillSvg from '@airclass/icons-svg/lib/asn/SafeFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SafeFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafeFillSvg}></AntdIcon>;
};

SafeFill.displayName = 'SafeFill';
SafeFill.inheritAttrs = false;
export default SafeFill;