// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import LogoutBoxRLineSvg from '@airclass/icons-svg/lib/asn/LogoutBoxRLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const LogoutBoxRLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LogoutBoxRLineSvg}></AntdIcon>;
};

LogoutBoxRLine.displayName = 'LogoutBoxRLine';
LogoutBoxRLine.inheritAttrs = false;
export default LogoutBoxRLine;