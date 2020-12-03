// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VidiconFillSvg from '@airclass/icons-svg/lib/asn/VidiconFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VidiconFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VidiconFillSvg}></AntdIcon>;
};

VidiconFill.displayName = 'VidiconFill';
VidiconFill.inheritAttrs = false;
export default VidiconFill;