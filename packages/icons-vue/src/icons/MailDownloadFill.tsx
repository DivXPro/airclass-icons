// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailDownloadFillSvg from '@airclass/icons-svg/lib/asn/MailDownloadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailDownloadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailDownloadFillSvg}></AntdIcon>;
};

MailDownloadFill.displayName = 'MailDownloadFill';
MailDownloadFill.inheritAttrs = false;
export default MailDownloadFill;