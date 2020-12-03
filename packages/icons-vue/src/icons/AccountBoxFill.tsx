// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AccountBoxFillSvg from '@airclass/icons-svg/lib/asn/AccountBoxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AccountBoxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AccountBoxFillSvg}></AntdIcon>;
};

AccountBoxFill.displayName = 'AccountBoxFill';
AccountBoxFill.inheritAttrs = false;
export default AccountBoxFill;