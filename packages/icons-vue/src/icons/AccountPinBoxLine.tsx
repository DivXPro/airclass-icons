// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AccountPinBoxLineSvg from '@airclass/icons-svg/lib/asn/AccountPinBoxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountPinBoxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountPinBoxLineSvg}></AntdIcon>;
};

AccountPinBoxLine.displayName = 'AccountPinBoxLine';
AccountPinBoxLine.inheritAttrs = false;
export default AccountPinBoxLine;