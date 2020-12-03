// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import PolaroidFillSvg from '@airclass/icons-svg/lib/asn/PolaroidFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const PolaroidFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PolaroidFillSvg}></AntdIcon>;
};

PolaroidFill.displayName = 'PolaroidFill';
PolaroidFill.inheritAttrs = false;
export default PolaroidFill;