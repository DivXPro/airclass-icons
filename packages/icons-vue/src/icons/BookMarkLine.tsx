// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookMarkLineSvg from '@airclass/icons-svg/lib/asn/BookMarkLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookMarkLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookMarkLineSvg}></AntdIcon>;
};

BookMarkLine.displayName = 'BookMarkLine';
BookMarkLine.inheritAttrs = false;
export default BookMarkLine;