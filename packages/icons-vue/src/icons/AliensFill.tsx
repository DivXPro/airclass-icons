// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AliensFillSvg from '@airclass/icons-svg/lib/asn/AliensFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AliensFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AliensFillSvg}></AntdIcon>;
};

AliensFill.displayName = 'AliensFill';
AliensFill.inheritAttrs = false;
export default AliensFill;