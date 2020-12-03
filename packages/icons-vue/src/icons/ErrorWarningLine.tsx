// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ErrorWarningLineSvg from '@airclass/icons-svg/lib/asn/ErrorWarningLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ErrorWarningLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ErrorWarningLineSvg}></AntdIcon>;
};

ErrorWarningLine.displayName = 'ErrorWarningLine';
ErrorWarningLine.inheritAttrs = false;
export default ErrorWarningLine;