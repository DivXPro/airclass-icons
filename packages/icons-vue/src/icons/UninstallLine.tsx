// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import UninstallLineSvg from '@airclass/icons-svg/lib/asn/UninstallLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const UninstallLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UninstallLineSvg}></AntdIcon>;
};

UninstallLine.displayName = 'UninstallLine';
UninstallLine.inheritAttrs = false;
export default UninstallLine;