import type { SVGProps } from 'react';

export function DockOutline(props: SVGProps<SVGSVGElement>) {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.769q.67 0 1.143.472q.472.472.472 1.144v12.769q0 .67-.472 1.143q-.472.472-1.143.472zM8 19V5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192zm1 0h9.385q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H9zm-1 0H5z"></path></svg>);
}