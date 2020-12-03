// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PauseMiniFillSvg from '@airclass/icons-svg/lib/asn/PauseMiniFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PauseMiniFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseMiniFillSvg}></AntdIcon>;
};

PauseMiniFill.displayName = 'PauseMiniFill';
PauseMiniFill.inheritAttrs = false;
export default PauseMiniFill;