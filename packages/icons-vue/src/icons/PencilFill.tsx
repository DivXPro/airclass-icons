// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PencilFillSvg from '@airclass/icons-svg/lib/asn/PencilFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PencilFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PencilFillSvg}></AntdIcon>;
};

PencilFill.displayName = 'PencilFill';
PencilFill.inheritAttrs = false;
export default PencilFill;