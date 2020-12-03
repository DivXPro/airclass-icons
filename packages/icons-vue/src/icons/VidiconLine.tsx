// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import VidiconLineSvg from '@airclass/icons-svg/lib/asn/VidiconLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const VidiconLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={VidiconLineSvg}></AntdIcon>;
};

VidiconLine.displayName = 'VidiconLine';
VidiconLine.inheritAttrs = false;
export default VidiconLine;