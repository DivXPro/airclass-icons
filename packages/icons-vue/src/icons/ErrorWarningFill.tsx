// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import ErrorWarningFillSvg from '@airclass/icons-svg/lib/asn/ErrorWarningFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const ErrorWarningFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ErrorWarningFillSvg}></AntdIcon>;
};

ErrorWarningFill.displayName = 'ErrorWarningFill';
ErrorWarningFill.inheritAttrs = false;
export default ErrorWarningFill;