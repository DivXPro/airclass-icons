// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UbuntuLineSvg from '@airclass/icons-svg/lib/asn/UbuntuLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UbuntuLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UbuntuLineSvg}></AntdIcon>;
};

UbuntuLine.displayName = 'UbuntuLine';
UbuntuLine.inheritAttrs = false;
export default UbuntuLine;