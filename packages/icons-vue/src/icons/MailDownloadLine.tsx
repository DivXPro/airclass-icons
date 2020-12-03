// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import MailDownloadLineSvg from '@airclass/icons-svg/lib/asn/MailDownloadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const MailDownloadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MailDownloadLineSvg}></AntdIcon>;
};

MailDownloadLine.displayName = 'MailDownloadLine';
MailDownloadLine.inheritAttrs = false;
export default MailDownloadLine;