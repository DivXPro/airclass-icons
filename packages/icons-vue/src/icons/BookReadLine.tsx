// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookReadLineSvg from '@airclass/icons-svg/lib/asn/BookReadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookReadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookReadLineSvg}></AntdIcon>;
};

BookReadLine.displayName = 'BookReadLine';
BookReadLine.inheritAttrs = false;
export default BookReadLine;