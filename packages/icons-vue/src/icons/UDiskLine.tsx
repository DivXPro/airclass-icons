// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UDiskLineSvg from '@airclass/icons-svg/lib/asn/UDiskLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UDiskLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UDiskLineSvg}></AntdIcon>;
};

UDiskLine.displayName = 'UDiskLine';
UDiskLine.inheritAttrs = false;
export default UDiskLine;