// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import InstallLineSvg from '@airclass/icons-svg/lib/asn/InstallLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const InstallLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstallLineSvg}></AntdIcon>;
};

InstallLine.displayName = 'InstallLine';
InstallLine.inheritAttrs = false;
export default InstallLine;